import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

// import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
//   const currentPage = Number(page as string) || 1;
//   const loggedIn = await getLoggedInUser();
  const loggedIn = {
    $id: '12345',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    userId: 'user_12345',
    dwollaCustomerUrl: 'https://api.dwolla.com/customers/12345',
    dwollaCustomerId: 'dwolla_12345',
    phoneNumber: '123-456-7890',
    address: '123 Main St',
    city: 'Sample City',
    state: 'CA',
    postalCode: '90001',
    country: 'USA',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    // Added required User fields
    name: 'John Doe',
    address1: '123 Main St',
    dateOfBirth: '1990-01-01',
    ssn: '123-45-6789'
  }
//   const accounts = await getAccounts({ 
//     userId: loggedIn.$id 
//   })

//   if(!accounts) return;
  
//   const accountsData = accounts?.data;
//   const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

//   const account = await getAccount({ appwriteItemId })

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[
              {
                id: '1',
                name: 'Checking',
                availableBalance: 5000,
                currentBalance: 5200,
                officialName: 'Checking Account',
                mask: '1234',
                type: 'depository',
                subtype: 'checking',
                institutionId: 'bankA',
                appwriteItemId: 'item1',
                shareableId: 'share1'
              },

              {
                id: '2',
                name: 'Savings',
                availableBalance: 7000,
                currentBalance: 7000,
                officialName: 'Savings Account',
                mask: '5678',
                type: 'depository',
                subtype: 'savings',
                institutionId: 'Bank B',
                appwriteItemId: 'item2',
                shareableId: 'share2'
              },
              {
                id: '3',
                name: 'Investment',
                availableBalance: 2345.67,
                currentBalance: 2345.67,
                officialName: 'Investment Account',
                mask: '9012',
                type: 'investment',
                subtype: 'brokerage',
                institutionId: 'Bank C',
                appwriteItemId: 'item3',
                shareableId: 'share3'
              }
            ]}
            totalBanks={1}
            totalCurrentBalance={12345.67} // Replace with actual total balance
          />
        </header>

        {/* <RecentTransactions 
          accounts={[]}
          transactions={2}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        /> */}
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]} // No account data, so pass an empty array
        banks={[]} // No accountsData, so pass an empty array
      />
    </section>
  )
}

export default Home