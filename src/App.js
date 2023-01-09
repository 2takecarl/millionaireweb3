import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Stack,
  Highlight,
  Heading,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Flex,
  Image,
  List,
  Button,
  UnorderedList,
  ListItem,
  Divider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import './App.css'
import { ReactComponent as MySvgFile } from './Untitled-1.svg'
import { ReactComponent as MyArrowSvg } from './arrow.svg'
import dude from './dude.png'
import { FaBars } from 'react-icons/fa'

{/* Header: You(underline) need a website */ }

function App() {
  const slides = [
    {
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const slidesCount = slides.length;


  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  var windowWidth = window.innerWidth;
  var windowSize;

  if (windowWidth > 1430) {
    windowSize = "lg";
  }
  if (windowWidth < 1430 && windowWidth > 1000) {
    windowSize = "md";
  }
  if (windowWidth < 1000 && windowWidth > 500) {
    windowSize = "sm"
  }
  if (windowWidth < 500) {
    windowSize = "xs"
  }


  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled >= 700)) {
      document.getElementById("hide").style.opacity = "1"
      document.getElementById("hide").style.pointerEvents = "auto"
    } else {
      document.getElementById("hide").style.opacity = "0"
      document.getElementById("hide").style.pointerEvents = "none"
    }
  })

  const scrollSection0 = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const scrollSection1 = () => {
    document.getElementById("section1").scrollIntoView({ behavior: 'smooth' });
  }
  const scrollSection2 = () => {
    document.getElementById("section2").scrollIntoView({ behavior: 'smooth' });
  }
  const scrollSection3 = () => {
    document.getElementById("section3").scrollIntoView({ behavior: 'smooth' });
  }
  if (windowSize == "lg") {

    return (

      <ChakraProvider theme={theme}>

        <Box id="hide" position="sticky" top="0">
          <HStack display="flex" justifyContent="space-evenly">
            <Heading backgroundColor="#1A202C">
              <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '2.5rem' }}>
                You need a website
              </Highlight>
            </Heading>
            <Stack direction="row" backgroundColor="#1A202C">
              <Button onClick={scrollSection0} zIndex="2" minW="100px">Home</Button>
              <Button onClick={scrollSection1} zIndex="2" minW="100px">About</Button>
              <Button onClick={scrollSection2} zIndex="2" minW="100px">Services</Button>
              <Button onClick={scrollSection3} zIndex="2" minW="100px">Contact</Button>

            </Stack>
          </HStack>
        </Box>

        <Box display="flex" justifyContent="space-evenly" mt="60" mb="200px">
          <Heading fontSize="4rem">
            <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '4.5rem' }}>
              You need a website, Now.
            </Highlight>
            <Heading>
              <Highlight query="Your's" styles={{ bgColor: 'green.200', backgroundClip: 'text' }}>
                Get Your's within 2 weeks. For Free.
              </Highlight>
            </Heading>
          </Heading>


          <Flex maxW="600px" alignItems="center" justifyContent="center" mt="-1px" zIndex="0" >
            <Flex w="full" overflow="hidden">
              <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
                {slides.map((slide, sid) => (
                  <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                    <Text
                      color="white"
                      fontSize="xs"
                      p="8px 12px"
                      pos="absolute"
                      top="0"
                      whiteSpace="nowrap"
                    >
                      {sid + 1} / {slidesCount}
                    </Text>
                    <Image
                      src={slide.img}
                      alt="carousel image"
                      boxSize="full"
                      backgroundSize="cover"
                    />
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Flex>

        </Box>

        <Box id="section1">
          <br />
          <br />
          <Heading ml="100px" fontSize="3.6rem">
            <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '3.8rem' }}>
              You need a website
            </Highlight>
          </Heading>
          <br />
          <br />
          <Box display="flex" flexDirection="row" justifyContent="center" ml="40px" mr="40px">
            <Image alt="" src={dude} w="25%" />
            <Heading ml="20px">
              What do you think of when you look at this image?
              <br />
              <br />
              <Heading>
                Business owner?
                <br />
                <br />
                <Heading>
                  The point is that you will never make money by showing people the books you've read.
                  <br />
                  <br />
                  <Heading>
                    <Highlight query="Online" styles={{ bgColor: 'green.200', backgroundClip: 'text' }}>
                      You need to start making money Online.
                    </Highlight>
                    <br />
                    <br />
                    <Highlight query="No One" styles={{ bgColor: 'green.200', backgroundClip: 'text' }}>
                      ...And No One cares what school you went to.
                    </Highlight>
                  </Heading>
                </Heading>
              </Heading>
            </Heading>
          </Box>
        </Box>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box mt="100px" id="section2" ml="40px" mr="40px">
          <br />
          <br />
          <Heading fontSize="3.6rem">
            Making money online
          </Heading>
          <Heading>
            <UnorderedList>
              <br />
              <ListItem mt="20px">
                E-Commerce
              </ListItem>
              <ListItem mt="20px">
                Private Services
              </ListItem>
              <ListItem mt="20px">
                Freelancing
              </ListItem>
              <ListItem mt="20px">
                Copywriting
              </ListItem>
              <ListItem mt="20px">
                NFT
              </ListItem>
            </UnorderedList>
            <Heading>
              <Highlight query={["no need for Investment Capital", "many ways", 'online']} styles={{ bgColor: 'green.200', backgroundClip: 'text' }}>
                These are all among many ways to make money Online with little to No Need for Investment Capital.
              </Highlight>
              <br />
              <br />
              <Heading>
                See a pattern?
              </Heading>
              <Heading mt="20px">
                They all need a website, Of Course!
              </Heading>
            </Heading>
          </Heading>
        </Box>
        <br />
        <br />
        <br />
        <Box id="section3">
          <br />
          <br />
          <br />
          <Heading fontSize="3.6rem" ml="40px" mr="40px">
            That's why I'm here.
            <Heading>
              <br />
              What I offer:
              <br />
              <br />
            </Heading>
            <Heading>
              <Highlight query={["personally", "Your", "For Free"]} styles={{ bgColor: 'green.200', backgroundClip: 'text' }}>
                Whether you want to sell products/services or anything else, I will Personally build and update Your website. For Free.
              </Highlight>
            </Heading>
            <Heading mt="50px" fontSize="4rem">
              Interested?
            </Heading>
            <Heading fontSize="3.5rem">
              <Highlight query="Great" styles={{ bgColor: 'green.200', backgroundClip: 'text' }}>
                Great.
              </Highlight>
              <Heading>
                Contact me through my Instagram DM's: <Link href="https://www.instagram.com/1take.carl">@1take.carl</Link>
              </Heading>
            </Heading>
          </Heading>
        </Box>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </ChakraProvider>
    )
  } else if (windowSize == "md") {
    return (

      <ChakraProvider theme={theme}>

        <Box id="hide" position="sticky" top="0">
          <HStack display="flex" justifyContent="space-evenly">
            <Heading backgroundColor="#1A202C">
              <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '2.5rem' }}>
                You need a website
              </Highlight>
            </Heading>
            <Stack direction="row" backgroundColor="#1A202C">
              <Button onClick={scrollSection0} zIndex="2" minW="100px">Home</Button>
              <Button onClick={scrollSection1} zIndex="2" minW="100px">About</Button>
              <Button onClick={scrollSection2} zIndex="2" minW="100px">Services</Button>
              <Button onClick={scrollSection3} zIndex="2" minW="100px">Contact</Button>

            </Stack>
          </HStack>
        </Box>

        <Box display="flex" flexDirection="column" justifyContent="space-evenly" mt="40" mb="200px" textAlign="center" >
          <Heading fontSize="3rem">
            <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '3.5rem' }}>
              You need a website, Now.
            </Highlight>
            <Heading>
              <Highlight query="Your's" styles={{ bgColor: 'green.200', backgroundClip: 'text' }}>
                Get Your's within 2 weeks. For Free.
              </Highlight>
            </Heading>
          </Heading>

          <Box display="flex" alignItems="center" justifyContent="center">
            <Flex maxW="600px" mt="20px" zIndex="0" >
              <Flex w="full" overflow="hidden">
                <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
                  {slides.map((slide, sid) => (
                    <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                      <Text color="white" fontSize="xs" p="8px 12px" pos="absolute" top="0" whiteSpace="nowrap">
                        {sid + 1} / {slidesCount}
                      </Text>
                      <Image src={slide.img} alt="" boxSize="full" backgroundSize="cover" />
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Box>

        </Box>




        <Box minH="800px" id="section1">
          <Stack direction="column">
            <Heading mt="45px" ml="100px" fontSize="3rem">
              <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '3.2rem' }}>
                You need a website
              </Highlight>
              <br />
              <br />
              <Stack direction="row">
                <Box>
                  <Image alt="" src={dude} w="50%" m="0" />
                </Box>
                <Heading ml="">
                  What do you think of when you look at this image?
                </Heading>
              </Stack>

            </Heading>
          </Stack>
        </Box>
        <Box minH="800px" id="section2">
          section2
        </Box>
        <Box minH="800px" id="section3">
          section3
        </Box>

      </ChakraProvider>
    )
  } else if (windowSize == "sm") {
    return (

      <ChakraProvider theme={theme}>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Box id="hide" position="sticky" top="0">
          <HStack display="flex" justifyContent="space-evenly">
            <Heading backgroundColor="#1A202C">
              <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '2.5rem' }}>
                You need a website
              </Highlight>
            </Heading>
            <Button ref={btnRef} onClick={onOpen} bgColor="#1A202C" fontSize="2rem" >
              <FaBars fontSize="1.5rem" />
            </Button>
          </HStack>
        </Box>

        <Box display="flex" flexDirection="column" justifyContent="space-evenly" mt="40" mb="200px" textAlign="center" >
          <Heading fontSize="3rem">
            <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '3.5rem' }}>
              You need a website, Now.
            </Highlight>
            <Heading>
              <Highlight query="Your's" styles={{ bgColor: 'green.200', backgroundClip: 'text' }}>
                Get Your's within 2 weeks. For Free.
              </Highlight>
            </Heading>
          </Heading>

          <Box display="flex" alignItems="center" justifyContent="center">
            <Flex maxW="600px" mt="20px" zIndex="0" >
              <Flex w="full" overflow="hidden">
                <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
                  {slides.map((slide, sid) => (
                    <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                      <Text color="white" fontSize="xs" p="8px 12px" pos="absolute" top="0" whiteSpace="nowrap">
                        {sid + 1} / {slidesCount}
                      </Text>
                      <Image src={slide.img} alt="" boxSize="full" backgroundSize="cover" />
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Box>

        </Box>




        <Box minH="800px" id="section1">
          <Stack direction="column">
            <Heading mt="45px" ml="100px" fontSize="3rem">
              <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '3.2rem' }}>
                You need a website
              </Highlight>
              <br />
              <br />
              <Stack direction="row">
                <Box>
                  <Image alt="" src={dude} w="50%" m="0" />
                </Box>
                <Heading ml="">
                  What do you think of when you look at this image?
                </Heading>
              </Stack>

            </Heading>
          </Stack>
        </Box>
        <Box minH="800px" id="section2">
          section2
        </Box>
        <Box minH="800px" id="section3">
          section3
        </Box>

      </ChakraProvider>
    )
  } else if (windowSize == "xs"){
    return (

      <ChakraProvider theme={theme}>

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Box id="hide" position="sticky" top="0">
          <HStack display="flex" justifyContent="space-evenly">
            <Heading backgroundColor="#1A202C">
              <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '2.5rem' }}>
                You need a website
              </Highlight>
            </Heading>
            <Button ref={btnRef} onClick={onOpen} bgColor="#1A202C" fontSize="2rem" >
              <FaBars fontSize="1.5rem" />
            </Button>
          </HStack>
        </Box>

        <Box display="flex" flexDirection="column" justifyContent="space-evenly" mt="40" mb="200px" textAlign="center" >
          <Heading fontSize="3rem">
            <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '3.5rem' }}>
              You need a website, Now.
            </Highlight>
            <Heading>
              <Highlight query="Your's" styles={{ bgColor: 'green.200', backgroundClip: 'text' }}>
                Get Your's within 2 weeks. For Free.
              </Highlight>
            </Heading>
          </Heading>

          <Box display="flex" alignItems="center" justifyContent="center">
            <Flex maxW="600px" mt="20px" zIndex="0" >
              <Flex w="full" overflow="hidden">
                <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
                  {slides.map((slide, sid) => (
                    <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                      <Text color="white" fontSize="xs" p="8px 12px" pos="absolute" top="0" whiteSpace="nowrap">
                        {sid + 1} / {slidesCount}
                      </Text>
                      <Image src={slide.img} alt="" boxSize="full" backgroundSize="cover" />
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>

        <Box minH="800px" id="section1">
          <Stack direction="column">
            <Heading mt="45px" ml="100px" fontSize="3rem">
              <Highlight query="You" styles={{ bgColor: 'green.200', backgroundClip: 'text', fontSize: '3.2rem' }}>
                You need a website
              </Highlight>
              <br />
              <br />
              <Stack direction="row">
                <Box>
                  <Image alt="" src={dude} w="100%" m="0" />
                </Box>
                <Heading ml="">
                  What do you think of when you look at this image?
                </Heading>
              </Stack>

            </Heading>
          </Stack>
        </Box>
        <Box minH="800px" id="section2">
          section2
        </Box>
        <Box minH="800px" id="section3">
          section3
        </Box>

      </ChakraProvider>
    )
  }
}

{/*

<Box minW="600px" maxW="600px" minH="400px" maxH="400px" border="4px solid white">
          <Heading m="10px" fontSize="1.25rem" display="flex" justifyContent="center">
            Your Name Here.
          </Heading>
        </Box>
*/}

export default App;
