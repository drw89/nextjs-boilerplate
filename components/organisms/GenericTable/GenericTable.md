### Overview
This Component renders a generic Table.

#### Props
```
store: object isRequired,
tableID: string isRequired,
```

#### Data Structure
```json
{
  "tables": [
    {
      "tableID": "id",
      "name": "name",
      "description": "This is the description of the page",
      "head": [
        "header1",
        "header2",
        "header3"
      ],
      "body": [
        {
          "header1": "data1.1",
          "header2": "data1.2",
          "header3": "data1.3"
        },
        {
          "header1": "data2.1",
          "header2": "data2.2",
          "header3": "data2.3"
        }
      ]
    }
  ]
}
```
