import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import { updateComments } from '../store/comment/Comment.action'
import { useDispatch } from 'react-redux';

const UpdateCommentModal = ({ id, commId }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [comment, setComment] = useState()
    const dispatch = useDispatch()

    const handleUpdate = (id, commId) => {
        dispatch(updateComments(id, commId, comment))
        onClose()
    }

    return (
        <div>
            <Button colorScheme={"blue"} onClick={onOpen}>Update</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update comment here</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input onChange={(e) => setComment({ comment: e.target.value })} />
                    </ModalBody>

                    <ModalFooter>
                        <Button m={"auto"} colorScheme='blue' mr={3} onClick={() => handleUpdate(id, commId, comment)}>
                            Update Comment
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default UpdateCommentModal
