export const state = ()=>({
  cards: [
    {
      title: "Backlog",
      subCards: [
        {
          id: 1,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        },
        {
          id: 2,
          title: "Provide documentation on integrations",
          date: "Sep 12"
        },
        {
          id: 3,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design"
        },
        {
          id: 4,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        },
        {
          id: 5,
          title: "Test checkout flow",
          date: "Sep 15",
          type: "QA"
        }
      ]
    },
  
   
  
    {
      title: "Review",
      subCards: [
        {
          id: 9,
          title: "Provide documentation on integrations",
          date: "Sep 12"
        },
        {
          id: 10,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design"
        },
        {
          id: 11,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        },
        {
          id: 12,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design"
        },
        {
          id: 13,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        }
      ]
    },
    {
      title: "Done",
      subCards: [
        {
          id: 140,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        },
        {
          id: 150,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design"
        },
        {
          id: 160,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        }
      ]
    }
  ]
})

export const mutations =  {
  addCard(state , newCard){
      console.log('at state', newCard)
    state.cards.push(newCard)
  },

  addList(state , newList){
    console.log('at state', newCard)
  state.cards.push(newList)
}
}