import { Stack, Box, Editable, EditablePreview, EditableInput, Text } from "@chakra-ui/react";


export const Edit = () => {

    const data = [
        { ques: "Q1: ", ans: "filler filler filler" },
        { ques: "Q2: ", ans: "filler filler filler" },
        { ques: "Q3: ", ans: "filler filler filler" },
        { ques: "Q4: ", ans: "filler filler filler" },
        { ques: "Q5: ", ans: "filler filler filler" },
        { ques: "Q6: ", ans: "filler filler filler" },
      ];

    return (
        <Stack wordSpacing={4}>
        {data.map((item, index) => (
          <Box borderWidth="5px" key={index} p="6">
            <Editable.Root defaultValue={item.ques}>
              <Text fontWeight= "bolder">
                <EditablePreview />
                <EditableInput />
              </Text>
            </Editable.Root>
  
            <Editable.Root defaultValue={item.ans}>
              <Text color="gray.600">
                Answer: <EditablePreview />
                <EditableInput />
              </Text>
            </Editable.Root>
            
          </Box>
        ))}
      </Stack>

      


    );

};

export default Edit;