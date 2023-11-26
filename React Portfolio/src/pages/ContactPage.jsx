export default function ContactPage() {
    return (
        <div class='justify-content-center'>
            <h2>Contact</h2>
            <form action="">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name"  class="form-control"/>
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                </div>
                <p></p>
                <button>Submit</button>
            </form>
        </div>
    );
}