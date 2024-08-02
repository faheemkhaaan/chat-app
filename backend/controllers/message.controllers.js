import Conversations from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res) =>{
    console.log(req.body);
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params
        const senderId = req.user._id;

        let conversation = await Conversations.findOne({
            participants: { $all: [senderId,receiverId] },
        })
        if(!conversation){
            conversation = await Conversations.create({
                participants: [senderId,receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        console.log(newMessage.senderId);

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // SOCKET IO FUNCTIONALITY WILL GO HERE

        // await newMessage.save()
        // await conversation.save()


        // This will run in parallel
        await Promise.all([conversation.save(),newMessage.save()])

        res.status(201).send(newMessage)
    } catch (error) {
        console.log("Error in sendMessage controller",error)
        res.status(500).send({error:"Interna server error"})
    }
}

export const getMessages = async (req,res) =>{

    try {
        const {id: userToChatId} = req.params
        const senderId = req.user._id
        const conversation = await Conversations.findOne({
            participants: { $all: [senderId,userToChatId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).send([]);
        }
        const messages = conversation.messages

        res.status(200).send(messages)
    } catch (error) {
        
        console.log("Error in sendMessage controller",error)
        res.status(500).send({error:"Interna server error"})
    }
}