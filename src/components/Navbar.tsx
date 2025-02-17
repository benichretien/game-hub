import {HStack, Image} from '@chakra-ui/react';
import logo from "../assets/logo.webp";
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText:string) => void;
}

const Navbar = ({onSearch}:Props) => {
  return (
    <HStack  paddingRight={10}>
        <Image src={logo} boxSize="60px"/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar