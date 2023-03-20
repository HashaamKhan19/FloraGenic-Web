import { Container, Title, Accordion, createStyles, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    fontFamily: 'Poppins',
    fontWeight: 600,
    color: 'darkslategray',
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    color: 'darkslategray',
    fontFamily: 'Poppins',
    fontWeight: 400,
  },
}))

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.'

const delivery =
  'We deliver to all states in Pakistan. So it totally depends on where u live'
const newAccount =
  'You can create a new account by going to the login page and clicking on the "Create Account" button.'
const payment =
  'We accept all major credit cards and debit cards along with cash on delivery and easypaisa.'
const security =
  'Yes, we do. We use the latest security protocols to ensure your information is safe.'
const paymentSystem = 'We work with all major payment systems in Pakistan.'

export default function FAQs() {
  const { classes } = useStyles()
  return (
    <Container size="lg" py={'xl'} mt={'xl'}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated" pt={'xl'}>
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>
            How Long will shipping take? When will i receive my order?
          </Accordion.Control>
          <Accordion.Panel>{delivery}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            My account was hacked, how can I create another one?
          </Accordion.Control>
          <Accordion.Panel>{newAccount}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            What Methods of Payment do you take?
          </Accordion.Control>
          <Accordion.Panel>{payment}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            Do you store credit card information securely?
          </Accordion.Control>
          <Accordion.Panel>{security}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            What payment systems do you work with?
          </Accordion.Control>
          <Accordion.Panel>{paymentSystem}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}
