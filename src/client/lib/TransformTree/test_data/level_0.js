export const singleRoot = {
  name: 'root',
  partners: [],
}

export const withPartner = {
  name: 'root',
  partners: [
    {
      partner: {
        name: 'partner root',
      },
      children: [],
    },
  ],
}

export const withTwoPartners = {
  name: 'root',
  partners: [
    {
      partner: {
        name: 'partner 1 root',
      },
      children: [],
    },
    {
      partner: {
        name: 'partner 2 root',
      },
      children: [],
    },
  ],
}
