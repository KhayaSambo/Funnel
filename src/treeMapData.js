export default {
  name: "Affinity Channels",
  children: [
    { name: "Email", children: [{ name: "Email", score: 2.1 }] },
    { name: "Face To Face", children: [{ name: "Face To Face", score: 4.0 }] },
    { name: "Telephone", children: [{ name: "Telephone", score: 2.8 }] },
    { name: "Virtual", children: [{ name: "Virtual", score: 1.9 }] },
    {
      name: "Rep Approved Emails",
      children: [{ name: "Rep Approved Emails", score: 6.4 }]
    }
  ]
};
