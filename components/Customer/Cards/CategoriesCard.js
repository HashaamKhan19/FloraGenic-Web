import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  Container,
} from '@mantine/core'
import { RiPlantLine, RiSeedlingLine } from 'react-icons/ri'
import { GiGardeningShears, GiMedicines } from 'react-icons/gi'
import { MdOutlineGrass } from 'react-icons/md'
import { BiCategory } from 'react-icons/bi'

const mockdata = [
  { title: 'Plants', icon: RiPlantLine, color: 'green' },
  { title: 'Tools', icon: GiGardeningShears, color: 'yellow' },
  { title: 'Medicine', icon: GiMedicines, color: 'red' },
  { title: 'Decorations', icon: MdOutlineGrass, color: 'green' },
  { title: 'Seedlings', icon: RiSeedlingLine, color: 'blue' },
]

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 300ms ease',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4]
    }`,

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
      transition: 'box-shadow 700ms ease , transform 700ms ease-out',
    },
  },
}))

export default function CategoriesCard() {
  const { classes, theme } = useStyles()

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="sm" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ))

  return (
    <Container size={'xl'} mt={80}>
      <Group spacing={'xs'} mb={'lg'}>
        <BiCategory size={26} style={{ color: '#62A82C' }} />
        <Text
          style={{
            fontSize: '26px',
            color: 'darkslategray',
            fontWeight: 550,
          }}
        >
          Categories
        </Text>
      </Group>
      <SimpleGrid cols={4} mt="md">
        {items}
      </SimpleGrid>
    </Container>
  )
}
