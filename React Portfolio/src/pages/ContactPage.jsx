export default function ContactPage() {
    return (
        <div className=' justify-content-center '>
            <h2>Contact</h2>
            <form action="">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name"  className="form-control"/>
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>

                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <p id="submit-message"></p>
                <button>Submit</button>
            </form>
        </div>
    );
}