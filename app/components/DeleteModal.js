import React from 'react'
import { Modal } from "@gluestack-ui/themed"

const DeleteModal = ({visible, close}) => {

  const [showModal, setShowModal] = useState(false)
  console.log(showModal)
  const ref = React.useRef(null)

  return (
    <Center h={300}>
    <Modal
      isOpen={visible}
      onClose={() => {
        setShowModal(false)
      }}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Engage with Modals</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>
            Elevate user interactions with our versatile modals. Seamlessly
            integrate notifications, forms, and media displays. Make an impact
            effortlessly.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={close}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            action="positive"
            borderWidth="$0"
            onPress={close}
          >
            <ButtonText>Explore</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Center>
  )
}

export default DeleteModal