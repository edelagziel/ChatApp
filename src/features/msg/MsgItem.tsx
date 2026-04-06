import { Box } from "@mui/system";

export function MsgItem({Itemcolor}:{Itemcolor:string,side: "left" | "right";})
{
    return(
      
        <Box gap={2} bgcolor={Itemcolor} ></Box>
    )
}
