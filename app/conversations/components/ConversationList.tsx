'use client';

import { FullConversationType } from "@/app/types";

interface ConversationsListProps {
    initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationsListProps> = ({
    initialItems
}) => {
    return (
        <div>ConversationList</div>
    )
}

export default ConversationList;