export const onePartnerOneChild = {
  name: 'root',
  partners: [
    {
      partner: {
        name: 'root - partner',
      },
      children: [
        {
          name: 'child 1 - level 1',
          partners: [],
        },
      ],
    },
  ],
}

export const onePartnerTwoChildren = {
  name: 'root',
  partners: [
    {
      partner: {
        name: 'root - partner',
      },
      children: [
        {
          name: 'child 1 - level 1',
          partners: [],
        },
        {
          name: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
  ],
}

export const family1 = {
  name: 'root',
  partners: [
    {
      partner: {
        name: 'root - partner 1',
      },
      children: [
        {
          name: 'child 1 - level 1',
          partners: [],
        },
        {
          name: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
    {
      partner: {
        name: 'root - partner 2',
      },
      children: [],
    },
  ],
}


export const family2 = {
  name: 'root',
  partners: [
    {
      partner: {
        name: 'root - partner 1',
      },
      children: [
        {
          name: 'child 1 - level 1',
          partners: [],
        },
        {
          name: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
    {
      partner: {
        name: 'root - partner 2',
      },
      children: [
        {
          name: 'child 1 - level 1',
          partners: [],
        },
        {
          name: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
  ],
}

export const family3 = {
  name: 'root',
  partners: [
    {
      partner: {
        name: 'root - partner 1',
      },
      children: [
        {
          name: 'child 1 - level 1',
          partners: [],
        },
        {
          name: 'child 2 - level 1',
          partners: [],
        },
        {
          name: 'child 3 - level 1',
          partners: [],
        },
      ],
    },
    {
      partner: {
        name: 'partner 2',
      },
      children: [],
    },
    {
      partner: {
        name: 'root - partner 3',
      },
      children: [
        {
          name: 'child 1 - level 1',
          partners: [],
        },
        {
          name: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
  ],
}
