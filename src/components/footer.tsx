export default function Footer() {
  const Subscription = () => {
    return (
      <div>
        <div className="font-bold">Subscribe</div>
        <div>
          Get access to subscriber exclusive deals and be the first who gets
          informed about fresh sales.
        </div>
        <div>Your Email</div>
        <div>
          <button className="bg-black text-white border rounded-lg pt-2 pb-2 pl-4 pr-4">
            BUTTON
          </button>
        </div>
        <div>I agree the Terms and Conditions</div>
      </div>
    );
  };
  return (
    <div className="pt-20 pl-4 pr-4 grid grid-cols-4">
      <div>
        <div className="font-bold">Company</div>
        <div> About Us</div>
        <div> Careers</div>
        <div> Premium </div>
        <div>Tools</div> <div>Blog</div>{" "}
      </div>
      <div>
        <div className="font-bold">Pages</div>
        <div>Login </div>
        <div>Register </div>
        <div>Add List</div>
      </div>
      <div>
        <div className="font-bold">Contact</div>
        <div>Legal Terms</div>
        <div>Privacy </div>
        <div>Team </div>
        <div>About Us</div>
      </div>
      <Subscription />
    </div>
  );
}
