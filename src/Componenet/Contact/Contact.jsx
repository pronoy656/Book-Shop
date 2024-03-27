const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6">
      <div className="flex gap-x-10">
        <div className="w-[610px] border-2  bg-slate-100 p-6">
          <h1 className="text-3xl font-bold">CONTACT INFO</h1>
          <p className="text-xl font-medium mt-4">
            {" "}
            <span className="font-extrabold">Address:</span> 2 Ennerdale Civic
            center CNR/Katz RD and Smith Ennerdale, Gauteng
          </p>
          <p className="text-xl font-medium mt-4">
            <span className="font-extrabold">Phone:</span> ++021480
          </p>
          <p className="text-xl font-medium mt-4">
            <span className="font-extrabold">Email:</span> info@junkybooks.com
          </p>
        </div>
        <div className="w-[610px] border-2 bg-[#FFAC3326] p-6">
          <p className="text-3xl font-bold">LEAVE A MESSAGE</p>
          <div className="flex gap-x-8 mt-6">
            <input
              className="bg-slate-100 p-4 border-2 border-black w-72"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
            <input
              className="bg-slate-100 p-4 border-2 border-black w-72"
              type="email"
              name=""
              id=""
              placeholder="E-mail"
            />
          </div>
          <input
            className="bg-slate-100 p-4 border-2 border-black w-full mt-4"
            type="submit"
            value=""
            placeholder="Subject"
          />
          <textarea
            className="mt-6"
            name=""
            id=""
            cols="72"
            rows="15"
            placeholder="Text Messege"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="btn bg-black text-white">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
