import React, { useState } from "react";
import { FileInput, Label } from "flowbite-react";

function ContactForm() {
  const [isFocusedMailHeader, setIsFocusedMailHeader] = useState(false);
  const [isFocusedFirstName, setIsFocusedFirstName] = useState(false);
  const [isFocusedLastName, setIsFocusedLastName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedTel, setIsFocusedTel] = useState(false);
  const [isFocusedHow, setIsFocusedHow] = useState(false);
  const [isFocusedWhat, setIsFocusedWhat] = useState(false);
  const [isFocusedStoreName, setIsFocusedStoreName] = useState(false);
  const [isFocusedOrderNumber, setIsFocusedOrderNumber] = useState(false);
  const [isFocusedWhere, setIsFocusedWhere] = useState(false);
  const [isFocusedDate, setIsFocusedDate] = useState(false);
  const [isFocusedTextArea, setIsFocusedTextArea] = useState(false);

  return (
    <div className="w-full h-full pt-[61px] md:pt-[81px] flex items-center justify-center">
      <div className="w-full max-w-[620px] h-full mt-[50px] md:mt-[80px] flex flex-col items-center justify-center">
        {/** Cover Image Section Start */}
        <div className="w-full h-full flex justify-center px-[20px] pb-[5px] mb-[20px]">
          <img
            src="/images/cover-contact.jpg"
            alt=""
            className="w-[200px] h-[165px]"
          />
        </div>
        {/** Cover Image Section End */}

        {/** Text Under Cover Section Start */}
        <div className="w-full max-w-[500px] h-full flex flex-col px-[20px] gap-[5px] mb-[20px]">
          <p className="text-center font-prompt text-[20px]">
            ติดต่อพูดคุยกับเรา
          </p>
          <p className="text-center font-prompt text-[12px] text-[#736e6e]">
            กรุณากรอกข้อมูลให้ครบถ้วน เราจะติดต่อกลับไปเร็วที่สุด
            <br className="hidden md:flex" />
            กรณีด่วนเกี่ยวกับการสั่งอาหาร กรุณาติดต่อ 1450
          </p>
        </div>
        {/** Text Under Cover Section End */}
        <form action="" className="w-full h-full mb-[50px]">
          {/** Data Section Start */}
          <div className="w-full h-full px-[15px] md:px-[0px]">
            <p className="font-prompt text-[13px] mb-[5px]">ข้อมูลของคุณ</p>
          </div>
          <div className="w-full h-full flex flex-col px-[5px] md:px-[0px]">
            {/** Contact Mail Header Section Start */}
            <div className="w-full h-[45px] px-[10px] md:px-[0px] mb-[20px]">
              <div
                className={`w-full h-full px-[10px] md:px-[0px] mb-[20px] rounded-[6px] border-[1px] flex items-center ${
                  isFocusedMailHeader
                    ? "border-[1px] border-[#3f8aac]"
                    : "border-[1px]"
                }`}
              >
                {/** Floating Label Mail Header Start */}
                <div className="w-full h-[30px] relative">
                  <input
                    id="hmail"
                    type="text"
                    className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[14px] bg-white text-black focus:ring-0"
                    placeholder="เรื่องที่ต้องการติดต่อ"
                    autoComplete="current-text"
                    onFocus={() => {
                      setIsFocusedMailHeader(true);
                    }}
                    onBlur={() => {
                      setIsFocusedMailHeader(false);
                    }}
                    required
                  />
                  <label
                    htmlFor="hmail"
                    className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                  >
                    เรื่องที่ต้องการตืดต่อ
                    <span className="text-red-500">*</span>
                  </label>
                </div>
                {/** Floating Label Mail Header End */}
              </div>
            </div>
            {/** Contact Mail Header Section End */}

            {/** Contact First Name and Last Name Section Start */}
            <div className="w-full h-[110px] md:h-[45px] px-[10px] md:px-[0px] mb-[20px]">
              <div className="w-full h-full flex flex-col md:flex-row gap-[20px]">
                {/** Contact First Name Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] rounded-[6px] border-[1px] flex items-center ${
                    isFocusedFirstName
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  {/** Floating Label First Name Start */}
                  <div className="w-full h-[30px] relative">
                    <input
                      id="fname"
                      type="text"
                      className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[14px] bg-white text-black focus:ring-0"
                      placeholder="ชื่อ"
                      autoComplete="current-text"
                      onFocus={() => {
                        setIsFocusedFirstName(true);
                      }}
                      onBlur={() => {
                        setIsFocusedFirstName(false);
                      }}
                      required
                    />
                    <label
                      htmlFor="fname"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      ชื่อ
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label First Name End */}
                </div>
                {/** Contact First Name Section End */}

                {/** Contact Last Name Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] rounded-[6px] border-[1px] flex items-center ${
                    isFocusedLastName
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  {/** Floating Label Last Name Start */}
                  <div className="w-full h-[30px] relative">
                    <input
                      id="lname"
                      type="text"
                      className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[14px] bg-white text-black focus:ring-0"
                      placeholder="นามสกุล"
                      autoComplete="current-text"
                      onFocus={() => {
                        setIsFocusedLastName(true);
                      }}
                      onBlur={() => {
                        setIsFocusedLastName(false);
                      }}
                      required
                    />
                    <label
                      htmlFor="lname"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      นามสกุล
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label Last Name End */}
                </div>
                {/** Contact Last Name Section End */}
              </div>
            </div>
            {/** Contact First Name and Last Name Section End */}

            {/** Contact Email and Tel Section Start */}
            <div className="w-full h-[110px] md:h-[45px] px-[10px] md:px-[0px] mb-[20px]">
              <div className="w-full h-full flex flex-col md:flex-row gap-[20px]">
                {/** Contact Email Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] rounded-[6px] border-[1px] flex items-center ${
                    isFocusedEmail
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  {/** Floating Label Email Start */}
                  <div className="w-full h-[30px] relative">
                    <input
                      id="email"
                      type="text"
                      className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[14px] bg-white text-black focus:ring-0"
                      placeholder="อีเมล"
                      autoComplete="current-text"
                      onFocus={() => {
                        setIsFocusedEmail(true);
                      }}
                      onBlur={() => {
                        setIsFocusedEmail(false);
                      }}
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      อีเมล
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label Email End */}
                </div>
                {/** Contact Email Section End */}

                {/** Contact Tel Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] flex items-center rounded-[6px] border-[1px] ${
                    isFocusedTel
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  <div className="w-[40px] h-[30px] flex items-center justify-center border-r-[1px]">
                    <span className="font-prompt text-[12px] font-light text-[#666f89]">
                      +66
                    </span>
                  </div>
                  {/** Floating Label Tel Start */}
                  <div className="w-full h-[30px] relative">
                    <input
                      id="phone"
                      type="tel"
                      className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[14px] bg-white text-black focus:ring-0"
                      placeholder="เบอร์โทรศัพท์"
                      autoComplete="current-text"
                      onFocus={() => {
                        setIsFocusedTel(true);
                      }}
                      onBlur={() => {
                        setIsFocusedTel(false);
                      }}
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      เบอร์โทรศัพท์
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label Tel End */}
                </div>
                {/** Contact Tel Section End */}
              </div>
            </div>
            {/** Contact Email and Tel Section End */}

            {/** Contact How To Call Back and What Time To Call Back Section Start */}
            <div className="w-full h-[110px] md:h-[45px] px-[10px] md:px-[0px] mb-[20px]">
              <div className="w-full h-full flex flex-col md:flex-row gap-[20px]">
                {/** Contact How To Call Back Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] rounded-[6px] border-[1px] flex items-center ${
                    isFocusedHow
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  {/** Floating Label How To Call Back Start */}
                  <div className="w-full h-[35px] relative">
                    <select
                      id="how"
                      className="peer border-0 border-transparent w-full h-full text-[13px] font-prompt bg-white text-black focus:ring-0"
                      onFocus={() => {
                        setIsFocusedHow(true);
                      }}
                      onBlur={() => {
                        setIsFocusedHow(false);
                      }}
                      required
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-[#666f89]"
                      >
                        โปรดเลือก
                      </option>
                      <option value="">อีเมล</option>
                      <option value="">เบอร์โทรศัพท์</option>
                    </select>
                    <label
                      htmlFor="how"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      วิธีการติดต่อกลับ
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label How To Call Back End */}
                </div>
                {/** Contact How To Call Back Section End */}

                {/** Contact What Time To Call Back Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] rounded-[6px] border-[1px] flex items-center ${
                    isFocusedWhat
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  {/** Floating Label What Time To Call Back Start */}
                  <div className="w-full h-[35px] relative">
                    <select
                      id="what"
                      className="peer border-0 border-transparent w-full h-full text-[13px] font-prompt bg-white text-black focus:ring-0"
                      onFocus={() => {
                        setIsFocusedWhat(true);
                      }}
                      onBlur={() => {
                        setIsFocusedWhat(false);
                      }}
                      required
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-[#666f89]"
                      >
                        โปรดเลือก
                      </option>
                      <option value="">ตอนเช้า</option>
                      <option value="">ตอนบ่าย</option>
                      <option value="">ตอนเย็น</option>
                      <option value="">ไม่มีการตั้งค่าไว้</option>
                    </select>
                    <label
                      htmlFor="what"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      เวลาติดต่อกลับที่ต้องการ
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label What Time To Call Back End */}
                </div>
                {/** Contact What Time To Call Back Section End */}
              </div>
            </div>
            {/** Contact How To Call Back and What Time To Call Back Section End */}
          </div>
          {/** Data Section End */}

          {/** Description Section Start */}
          <div className="w-full h-full px-[15px] md:px-[0px]">
            <p className="font-prompt text-[13px] mb-[5px]">
              รายละเอียดคำสั่งซื้อของฉัน
            </p>
          </div>
          <div className="w-full h-full flex flex-col px-[5px] md:px-[0px]">
            {/** Contact Name Store and Order Number Section Start */}
            <div className="w-full h-[110px] md:h-[45px] px-[10px] md:px-[0px] mb-[20px]">
              <div className="w-full h-full flex flex-col md:flex-row gap-[20px]">
                {/** Contact Name Store Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] rounded-[6px] border-[1px] flex items-center ${
                    isFocusedStoreName
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  {/** Floating Label Name Store Start */}
                  <div className="w-full h-[30px] relative">
                    <input
                      id="sname"
                      type="text"
                      className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[14px] bg-white text-black focus:ring-0"
                      placeholder="ชื่อร้าน"
                      autoComplete="current-text"
                      onFocus={() => {
                        setIsFocusedStoreName(true);
                      }}
                      onBlur={() => {
                        setIsFocusedStoreName(false);
                      }}
                      required
                    />
                    <label
                      htmlFor="sname"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      ชื่อร้าน
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label Name Store End */}
                </div>
                {/** Contact Name Store Section End */}

                {/** Contact Order Number Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] rounded-[6px] border-[1px] flex items-center ${
                    isFocusedOrderNumber
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  {/** Floating Label Order Number Start */}
                  <div className="w-full h-[30px] relative">
                    <input
                      id="onum"
                      type="text"
                      className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[14px] bg-white text-black focus:ring-0"
                      placeholder="เลขคำสั่งซื้อ"
                      autoComplete="current-text"
                      onFocus={() => {
                        setIsFocusedOrderNumber(true);
                      }}
                      onBlur={() => {
                        setIsFocusedOrderNumber(false);
                      }}
                      required
                    />
                    <label
                      htmlFor="onum"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      เลขคำสั่งซื้อ
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label Order Number End */}
                </div>
                {/** Contact Order Number Section End */}
              </div>
            </div>
            {/** Contact Name Store and Order Number Section End */}

            {/** Contact Where Buy and Time Buy Section Start */}
            <div className="w-full h-[110px] md:h-[45px] px-[10px] md:px-[0px] mb-[20px]">
              <div className="w-full h-full flex flex-col md:flex-row gap-[20px]">
                {/** Contact Where Buy Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] rounded-[6px] border-[1px] flex items-center ${
                    isFocusedWhere
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  {/** Floating Label Where Buy Start */}
                  <div className="w-full h-[35px] relative">
                    <select
                      id="where"
                      className="peer border-0 border-transparent w-full h-full text-[13px] font-prompt bg-white text-black focus:ring-0"
                      onFocus={() => {
                        setIsFocusedWhere(true);
                      }}
                      onBlur={() => {
                        setIsFocusedWhere(false);
                      }}
                      required
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-[#666f89]"
                      >
                        โปรดเลือก
                      </option>
                      <option value="">Website</option>
                      <option value="">Store</option>
                      <option value="">Call center 1450</option>
                      <option value="">Grab</option>
                      <option value="">Foodpanda</option>
                    </select>
                    <label
                      htmlFor="where"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      คุณสั่งซื้อผ่านช่องทางไหน?
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label Where Buy End */}
                </div>
                {/** Contact Where Buy Section End */}

                {/** Contact Date Buy Section Start */}
                <div
                  className={`w-full md:w-1/2 h-[45px] rounded-[6px] border-[1px] flex items-center ${
                    isFocusedDate
                      ? "border-[1px] border-[#3f8aac]"
                      : "border-[1px]"
                  }`}
                >
                  {/** Floating Label Date Buy Start */}
                  <div className="w-full h-[30px] relative">
                    <input
                      id="date"
                      type="date"
                      className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[14px] bg-white text-black focus:ring-0"
                      placeholder="วันที่สั่งซื้อ"
                      autoComplete="bday"
                      onFocus={() => {
                        setIsFocusedDate(true);
                      }}
                      onBlur={() => {
                        setIsFocusedDate(false);
                      }}
                      required
                    />
                    <label
                      htmlFor="date"
                      className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                    >
                      วันที่สั่งซื้อ
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {/** Floating Label Date Buy End */}
                </div>
                {/** Contact Date Buy Section End */}
              </div>
            </div>
            {/** Contact Where Buy and Time Buy Section End */}
          </div>
          {/** Description Section End */}

          {/** Input File Section Start */}
          <div className="w-full h-full px-[15px] md:px-[0px] mb-[20px]">
            <p className="font-prompt text-[13px] mb-[5px]">
              แนบไฟล์เอกสารประกอบ
            </p>
            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="flex h-[300px] w-full cursor-pointer flex-col items-center justify-center rounded-[16px] border-[2px] border-[#e6f6fc]"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <p className="font-prompt text-[26px] font-light mb-[20px]">
                    อัปโหลดไฟล์
                  </p>
                  <p className="text-center font-prompt text-[14px] font-light">
                    สามารถอัปโหลดประเภทไฟล์ PNG, JPG และ JPEG <br />
                    โดยขนาดรูปรวมกันไม่เกิน 5 MB
                  </p>
                </div>
                <FileInput id="dropzone-file" className="hidden" />
              </Label>
            </div>
          </div>
          {/** Input File Section End */}

          {/** Text To Us Section Start */}
          <div className="w-full h-full px-[15px] md:px-[0px] mb-[20px]">
            <p className="font-prompt text-[13px] mb-[5px]">ฝากข้อความถึงเรา</p>
            <p className="font-prompt text-[11px] mb-[10px] text-[#927678]">
              หลีกเลี่ยงการใส่ข้อมูลส่วนบุคคลที่มีความอ่อนไหว
            </p>
            <div
              className={`w-full h-[300px] rounded-[6px] px-[10px] pt-[10px] border-[1px] flex  ${
                isFocusedTextArea ? "border-[#3f8aac]" : "border-[1px]"
              }`}
            >
              {/** Floating Label Name Store Start */}
              <div className="w-full relative">
                <textarea
                  id="textToMe"
                  className="peer border-0 border-transparent w-full h-full placeholder-transparent text-[14px] bg-white text-black focus:ring-0 resize-none"
                  placeholder="ข้อความ"
                  autoComplete="current-text"
                  onFocus={() => setIsFocusedTextArea(true)}
                  onBlur={() => setIsFocusedTextArea(false)}
                  required
                />
                <label
                  htmlFor="textToMe"
                  className="absolute left-0 ml-1 -top-1.5 bg-white px-1 font-prompt font-light text-[12px] text-[#666f89] duration-200 transform scale-75 origin-[0] peer-placeholder-shown:top-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[12px] peer-placeholder-shown:text-[#666f89] peer-focus:-top-1.5 peer-focus:scale-75"
                >
                  ข้อความ
                  <span className="text-red-500">*</span>
                </label>
              </div>
              {/** Floating Label Name Store End */}
            </div>
          </div>
          {/** Text To Us Section End */}

          {/** Confirm Section Start */}
          <div className="w-full h-full px-[15px] md:px-[0px] flex items-center justify-start mb-[30px]">
            <input
              type="checkbox"
              className="w-[18px] h-[18px] focus:ring-0 rounded-[6px] border-[1px] cursor-pointer border-[#e3e3e3] outline-none hover:border-[#caecf8]"
            />
            <p className="ml-[10px] font-prompt text-[12px]">
              ฉันได้อ่านและยอมรับ{" "}
              <span className="text-[#2176b3] cursor-pointer hover:underline hover:underline-offset-4">
                เงื่อนไขการใช้งาน
              </span>{" "}
              และฉันอายุ 13 ปีขึ้นไป
            </p>
          </div>
          {/** Confirm Section End */}

          {/** Submit Button Section Start */}
          <div className="w-full h-full px-[15px] md:px-[0px] flex items-center justify-center">
            <button className="w-[200px] h-[40px] bg-[#2176b3] rounded-[6px] hover:brightness-125 flex items-center justify-center">
              <span className="font-prompt text-[13px] text-white">
                ส่งข้อความ
              </span>
            </button>
          </div>
          {/** Submit Button Section End */}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
