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
    Textarea,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { FiEdit } from "react-icons/fi";
import { UpdatePostData } from '../store/Post/Post.action';



const UpdatePostModal = ({ id, userId,handlePostUpdate }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [post, setPost] = useState()
   
    return (
        <div>
            <Button colorScheme={"blue"} onClick={onOpen}><FiEdit /></Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Post Content</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea minH={"200px"} placeholder="type your content here" onChange={(e) => setPost({ content: e.target.value })} />
                    </ModalBody>

                    <ModalFooter>
                        <Button m={"auto"} colorScheme='blue' mr={3} onClick={() => handlePostUpdate(id, userId, post,onClose)}>
                            Update post
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default UpdatePostModal
