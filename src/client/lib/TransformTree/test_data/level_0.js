export const singleRoot = {
  value: 'root',
  partners: [],
}

export const withPartner = {
  value: 'root',
  partners: [
    {
      value: 'partner root',
      children: [],
    },
  ],
}

export const withTwoPartners = {
  value: 'root',
  partners: [
    {
      value: 'partner 1 root',
      children: [],
    },
    {
      value: 'partner 2 root',
      children: [],
    },
  ],
}
