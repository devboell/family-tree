export const onePartnerOneChild = {
  value: 'root',
  partners: [
    {
      value: 'root - partner',
      children: [
        {
          value: 'child 1 - level 1',
          partners: [],
        },
      ],
    },
  ],
}

export const onePartnerTwoChildren = {
  value: 'root',
  partners: [
    {
      value: 'root - partner',
      children: [
        {
          value: 'child 1 - level 1',
          partners: [],
        },
        {
          value: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
  ],
}

export const family1 = {
  value: 'root',
  partners: [
    {
      value: 'root - partner 1',
      children: [
        {
          value: 'child 1 - level 1',
          partners: [],
        },
        {
          value: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
    {
      value: 'root - partner 2',
      children: [],
    },
  ],
}


export const family2 = {
  value: 'root',
  partners: [
    {
      value: 'root - partner 1',
      children: [
        {
          value: 'child 1 - level 1',
          partners: [],
        },
        {
          value: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
    {
      value: 'root - partner 2',
      children: [
        {
          value: 'child 1 - level 1',
          partners: [],
        },
        {
          value: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
  ],
}

export const family3 = {
  value: 'root',
  partners: [
    {
      value: 'root - partner 1',
      children: [
        {
          value: 'child 1 - level 1',
          partners: [],
        },
        {
          value: 'child 2 - level 1',
          partners: [],
        },
        {
          value: 'child 3 - level 1',
          partners: [],
        },
      ],
    },
    {
      value: 'partner 2',
      children: [],
    },
    {
      value: 'root - partner 3',
      children: [
        {
          value: 'child 1 - level 1',
          partners: [],
        },
        {
          value: 'child 2 - level 1',
          partners: [],
        },
      ],
    },
  ],
}
