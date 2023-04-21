import { Prisma } from '@prisma/client'

export const defaultPostSelect = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  title: true,
  content: true,
  contentHtml: true,
  createdAt: true,
  updatedAt: true,
  authorId: true,
  author: {
    select: {
      image: true,
      name: true,
    },
  },
  readBy: {
    select: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  },
  // TODO(example): Update counter when reply feature is added
  // _count: {
  //   select: {
  // replies: true,
  // },
  // },
})

export const withCommentsPostSelect = Prisma.validator<Prisma.PostSelect>()({
  ...defaultPostSelect,
  // TODO(example): Update select when reply feature is added
  // replies: {
  //   orderBy: {
  //     createdAt: 'asc',
  //   },
  //   select: {
  //     id: true,
  //     content: true,
  //     contentHtml: true,
  //     createdAt: true,
  //     author: {
  //       select: {
  //         id: true,
  //         name: true,
  //         image: true,
  //       },
  //     },
  //   },
  // },
})
