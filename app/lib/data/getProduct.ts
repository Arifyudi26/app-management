import { prisma } from "@app/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getProducts = async () => {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/dashboard");
  }

  if (session?.user?.role === "super admin") {
    try {
      const products = await prisma.product.findMany({
        include: { user: { select: { name: true } } },
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const products = await prisma.product.findMany({
        where: { id_user: session.user.id },
        include: { user: { select: { name: true } } },
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
};
