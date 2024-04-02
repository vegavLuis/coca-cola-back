import mongoose from "mongoose";
export const db = async () => {
  main().catch((err) => console.log(err));

  async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/cocaCola");
    console.log("conectado a la db");
  }
};
