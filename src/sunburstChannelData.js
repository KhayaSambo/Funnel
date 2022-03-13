export default {
  name: "nivo",
  color: "hsl(146, 70%, 50%)",
  children: [
    {
      name: "My own",
      color: "hsl(310, 90%, 19%)",
      children: [
        {
          name: "F2F",
          color: "hsl(304, 70%, 50%)",
          loc: 5
        },
        {
          name: "Virtual",
          color: "hsl(181, 70%, 50%)",
          loc: 22
        },
        {
          name: "Other",
          color: "hsl(133, 70%, 50%)",
          loc: 1
        }
      ]
    },
    {
      name: "Biogen",
      color: "hsl(210, 58%, 44%)",
      children: [
        {
          name: "F2F",
          color: "hsl(210, 58%, 44%)",
          loc: 0
        },
        {
          name: "Virtual",
          color: "hsl(210, 58%, 44%)",
          loc: 12
        },
        {
          name: "Other",
          color: "hsl(210, 58%, 44%)",
          loc: 5
        }
      ]
    }
  ]
};
