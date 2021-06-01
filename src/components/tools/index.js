import NextImage from 'next/image';
import { chakra } from '@chakra-ui/system';

export const Avatar = chakra(NextImage, {
  baseStyle: { rounded: 'full' },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'layout', 'onLoad', 'children'].includes(
      prop
    ),
});
