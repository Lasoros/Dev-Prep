import { Stack, Box, Editable, EditablePreview, EditableInput, Text, AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent} from "@chakra-ui/react";


export const Edit = () => {


    // const dataCard = [
    //     [orig: "Question 1", place: ""],
    // ]

    const data = [
        { ques: "Q1: ", ans: "Put Answer Below" , default: "Question One"},
        { ques: "Q2: ", ans: "Put Answer Below" , default: "Question Two"},
        { ques: "Q3: ", ans: "Put Answer Below" , default: "Question Three"},
        { ques: "Q4: ", ans: "Put Answer Below" , default: "Question Four"},
        { ques: "Q5: ", ans: "Put Answer Below" , default: "Question Five"},
        { ques: "Q6: ", ans: "Put Answer Below" , default: "Question Six"},
      ];

    return (
        <Stack wordSpacing={4}>
        {data.map((item, index) => (

            <AccordionRoot collapsible defaultValue={["b"]}>
            <AccordionItem key={index} value={item.ques}>
                <Box borderWidth="3px" key={index} p="8">
                <AccordionItemTrigger> {item.default} 
                    <Editable.Root defaultValue={item.ques}>
                        <Text fontWeight= "bolder">
                            <EditablePreview />
                            <EditableInput />
                        </Text>
                    </Editable.Root>
                </AccordionItemTrigger>

                <AccordionItemContent> {item.ans}

                <Editable.Root defaultValue={item.ans}>
                    <Text color= "white">
                        Answer: <EditablePreview />
                        <EditableInput />
                    </Text>
                </Editable.Root>
                </AccordionItemContent>
  
            
                </Box>
            </AccordionItem>
            </AccordionRoot>

        ))}
      </Stack>

      


    );

};

export default Edit;