import { Profile } from "../Profile/Profile"
import { Statistics } from "../Statistics/Statistics"
import { FriendList } from "../Friends/FriendList/FriendList"
import { TransactionHistory } from "../TransactionHistory/Transactions/Transactions"
import user from "../../user.json"
import statisticalData from "../../statistical-data.json"
import friends from "../../friends.json"
import transactions from '../../transactions.json';

export const App = () => {
    return (<>
        <Profile user={user} />
        <Statistics title="Upload stats" stats={statisticalData} />;
        <Statistics stats={statisticalData} />;
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
 </>)
}