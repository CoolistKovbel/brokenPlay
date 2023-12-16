import { grabAllAnnouncements } from "./web3"


interface UserMessagesProps {
    address: string
}

export const UserMessages =  async ({address}: UserMessagesProps) => {

    try {

        const AllMessages = await grabAllAnnouncements(address)


        return AllMessages

        
    } catch (error) {
        console.log(error)
    }



}