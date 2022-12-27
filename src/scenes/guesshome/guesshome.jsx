import { Box, useMediaQuery } from "@mui/material";

import Navbar from "../guesnavbar/guessnavbar";

import AdvertWidget from "scenes/widgets/AdvertWidget";
import GuessPostsWidget from "scenes/widgets/GuesspostsWidget";



const GuessPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "15%" : undefined}>
        <AdvertWidget />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "85%" : undefined}
          mt={isNonMobileScreens ? undefined : "1.75rem"}
        >
      
        <GuessPostsWidget />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
          
            
            <Box m="2rem 0" />
           
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default GuessPage;