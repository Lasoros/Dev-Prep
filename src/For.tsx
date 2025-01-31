import { Box, For, Stack , Text} from "@chakra-ui/react";
import { Editable } from "@chakra-ui/react";


export const Loop = () => {
    return (

        <Editable.Root defaultValue="Double click to edit" activationMode="dblclick">
        <Stack>

        <For
          each={[
              { ques: "Q1: ", ans: ["filler filler filler"] },
            ]}
            
            >
          {(item, index) => (
                <Editable.Preview>
                <Editable.Input>
              <Box borderWidth="1px" key={index} p="4">
              <Text fontWeight="bold">{item.ques}</Text>
              <Text color="fg.muted">Answer: {item.ans.join(", ")}</Text>
            </Box>
              </Editable.Input>
          </Editable.Preview>
          )}
        </For>
      </Stack>
      </Editable.Root>


    )
  }

export default Loop;