import db from "@/app/lib/db";
import bcrypt from "bcrypt";
import User from "@/app/models/User";

export async function POST(req) {
  try {
    await db.connect();

    const { username, email, password: pass } = await req.JSON();

    const isExisting = await User.findOne({ email });

    if (isExisting) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(pass, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const { password, ...user } = newUser._doc;
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
