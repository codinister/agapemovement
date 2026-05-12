export type fadeUpType = {
    hidden: {
    opacity: number,
    y: number,
  },
  visible: (delay: number) => ({
    opacity: number,
    y: number,
    transition: {
      duration: number,
      delay: number,
      ease: 'easeOut',
    },
  }),
}