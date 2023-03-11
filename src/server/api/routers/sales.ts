import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const SaleSchema = z.object({
  item: z.string(),
  price: z.number(),
  quantity: z.number(),
  date: z.optional(z.date()),
});

export const salesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.sales.findMany();
  }),
  create: publicProcedure.input(SaleSchema).mutation(({ ctx, input }) => {
    return ctx.prisma.sales.create({ data: input });
  }),
});
