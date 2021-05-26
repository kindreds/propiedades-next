import Image from 'next/image';
import { chakra } from '@chakra-ui/system';

export const Avatar = chakra(Image, {
  baseStyle: { rounded: 'full' },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});
