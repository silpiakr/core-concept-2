export default function Friend({friend}){
    const {name, email} = friend;
    return (
        <div className="box">
            <h3>Friend Name: {name}</h3>
            <p>Friend Email: {email}</p>
        </div>
    )
}