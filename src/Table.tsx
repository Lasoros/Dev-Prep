import { Table } from "@chakra-ui/react"

export const LinkTable = () => {
  return (
    <Table.Root size= "lg">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Level</Table.ColumnHeader>
          <Table.ColumnHeader>Category</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Link</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.lvl}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell textAlign="end">{item.link}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

const items = [
  { id: 1, lvl: "Junior", category: "Technical", link: <a href="https://www.geeksforgeeks.org/web-developer-interview-questions-and-answers/">GeeksforGeeks</a> },
  { id: 2, lvl: "Junior", category: "Ice Breakers", link: <a href="https://interviewprep.org/junior-web-developer-interview-questions/">InterviewPrep</a> },
  { id: 3, lvl: "Junior", category: "Coding", link: <a href="https://www.indeed.com/career-advice/interviewing/junior-developer-interview-questions">Indeed</a> },
  { id: 4, lvl: "Middle", category: "Technical", link: <a href="https://www.fullstack.cafe/blog/50-junior-web-developer-interview%20-questions-and-answers-ultimate-list-2018">FullStack</a> },
  { id: 5, lvl: "Middle", category: "Ice Breakers", link: <a href="https://interviewace.org/junior-web-developer-interview-questions/">InterViewAce</a> },
]

export default LinkTable;