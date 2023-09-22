import { Authenticator } from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css';


const Authpage =  () =>{

    const MyButton = ({ onClick }) => {
        return (
          <button 
            onClick={onClick} 
            style={{ 
              backgroundColor: 'lightcyan', 
              color: 'black', 
              fontSize: '20px', 
              padding: '10px 15px' 
            }}
          >
            Sign out
          </button>
        )
      }
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>
                        Hello , Welcome to the page 
                    </h1>
                    <h2>You are authenticated !! This is the Auth page..</h2>
                    <MyButton onClick={signOut}>Sign out</MyButton>
                </div>
            )

            }
        </Authenticator>
    )

}

export default Authpage