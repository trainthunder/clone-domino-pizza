import React from "react";

function AboutUsMain() {
  return (
    <div className="w-full h-full pt-[61px] md:pt-[81px] flex flex-col items-center">
      {/** Banner Section Start */}
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="w-full absolute z-10 bottom-[40px] text-start pl-[40px] text-wrap">
          <span className="text-white font-prompt text-[34px] font-medium">
            แบรนด์พิซซ่า ที่ได้รับ
            <br className="min-[437px]:hidden" />
            ความ
            <br className="hidden min-[437px]:flex min-[498px]:hidden" />
            นิยม <br /> สูงสุดในสหรัฐอเมริกา
          </span>
        </div>
        <div className="w-full h-full bg-gradient-to-b from-transparent from-60% to-[#525252] to-100% absolute"></div>
        <img
          src="/images/about-us-banner-mobile.jpg"
          alt=""
          className="md:hidden w-full"
        />
        <img
          src="/images/about-us-banner-laptop.jpg"
          alt=""
          className="hidden md:flex"
        />
      </div>
      {/** Banner Section End */}

      {/** About Us First Section Start */}
      <div className="w-full md:max-w-[1200px] h-full px-[15px] pt-[50px] md:pt-[65px] flex flex-col md:flex-row md:justify-center md:items-center md:gap-[20px] mb-[50px] md:mb-[95px]">
        <div className="w-full h-[400px] mb-[50px]">
          <img src="/images/cover-about-us.svg" alt="" className="h-full" />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-[380px] flex flex-col gap-[20px] md:gap-[40px]">
            <p className="font-prompt text-[20px] font-medium md:text-[32px]">
              เมนู Signature คือ{" "}
              <br className="hidden md:flex min-[775px]:hidden" />
              พิซซ่า
              <br className="hidden md:flex" />
              ต้นตำรับ
              <br className="min-[385px]:hidden" />
              สัญชาติ
              <br className="hidden min-[390px]:flex md:hidden" />
              อเมริกัน
            </p>
            <p className="font-prompt text-[12px] text-[#585b64] md:text-[16px]">
              ใช้วัตถุดิบสดใหม่และมีคุณภาพ โดยเฉพาะแป้ง Signature hand tossed
              สูตรลับความอร่อยของโดมิโน่ส์พิซซ่า แป้งสดนวดมือ
              ที่ทำให้แป้งพิซซ่าของโดมิโน่ส์มีเนื้อสัมผัสที่นุ่มฟูไม่เหมือนใคร
              และการใช้ชีสนำเข้าคุณภาพสูง
            </p>
          </div>
        </div>
      </div>
      {/** About Us First Section End */}

      {/** About Us Second Section Start */}
      <div className="w-full md:max-w-[1200px] h-full px-[15px] pt-[50px] md:pt-[65px] flex flex-col md:flex-row md:justify-center md:items-center md:gap-[20px] mb-[50px] md:mb-[30px]">
        <div className="hidden md:flex w-full h-full items-center justify-center">
          <div className="w-full max-w-[380px] flex flex-col gap-[20px] md:gap-[40px]">
            <p className="font-prompt text-[20px] font-medium md:text-[32px]">
              ใส่ใจในทุกการส่ง ให้รวดเร็วอุ่นอร่อยถึงมือ
              <br className="hidden min-[382px]:flex md:hidden " />
              คุณแน่นอน
            </p>
            <p className="font-prompt text-[12px] text-[#585b64] md:text-[16px]">
              เราขนส่งพิซซ่าอย่างรวดเร็ว และใช้เทคโนโลยีที่ทันสมัย
              ในการขนส่งเพื่อที่จะรักษาคุณภาพของพิซซ่าให้ใกล้เคียง
              กับหลังอบเสร็จใหม่ๆ จึงมั่นใจได้ว่าพิซซ่าของเราอบสดใหม่ ทุกถาด
            </p>
          </div>
        </div>
        <div className="w-full h-[400px] mb-[50px]">
          <img src="/images/cover-about-us-2.svg" alt="" className="h-full" />
        </div>
        <div className="w-full h-full flex items-center justify-center md:hidden">
          <div className="w-full max-w-[380px] flex flex-col gap-[20px] md:gap-[40px]">
            <p className="font-prompt text-[20px] font-medium md:text-[32px]">
              ใส่ใจในทุกการส่ง ให้รวดเร็วอุ่นอร่อยถึงมือ
              <br className="hidden min-[382px]:flex" />
              คุณแน่นอน
            </p>
            <p className="font-prompt text-[12px] text-[#585b64] md:text-[16px]">
              เราขนส่งพิซซ่าอย่างรวดเร็ว และใช้เทคโนโลยีที่ทันสมัย
              ในการขนส่งเพื่อที่จะรักษาคุณภาพของพิซซ่าให้ใกล้เคียง
              กับหลังอบเสร็จใหม่ๆ จึงมั่นใจได้ว่าพิซซ่าของเราอบสดใหม่ ทุกถาด
            </p>
          </div>
        </div>
      </div>
      {/** About Us Second Section End */}

      {/** About Us Third Section Start */}
      <div className="w-full h-full flex justify-center bg-[#006490]">
        <div className="w-full md:max-w-[1200px] h-full px-[15px] pt-[100px] pb-[70px]">
          <p className="font-prompt text-white text-center text-[20px] md:text-[32px] mb-[20px] font-medium">
            ปัจจุบัน โดมิโน่ส์พิซซ่ามีร้านทั้งหมด
          </p>
          <div className="w-full h-full flex justify-center relative">
            <img src="/images/cover-about-us-store.svg" alt="" />
            <div className="absolute flex flex-col bottom-[60px] md:bottom-[45px] items-center gap-[5px]">
              <p className="font-prompt text-white text-[20px] md:text-[28px]">
                <span className="text-[45px] mr-[5px] md:text-[64px]">26</span>
                สาขา
              </p>
              <p className="font-prompt text-[14px] md:text-[18px] text-white">
                ในประเทศไทย
              </p>
            </div>
          </div>
        </div>
      </div>
      {/** About Us Third Section End */}

      {/** About Us Fourth Section Start */}
      <div className="w-full md:max-w-[780px] min-[961px]:max-w-[965px] h-full px-[15px] pt-[60px] pb-[100px]">
        <p className="font-prompt text-[20px] text-black text-center font-medium md:text-[32px] mb-[40px]">
          เรื่องราวของ Domino's Pizza
        </p>
        {/** Mobile Story Store Start */}
        <div className="w-full h-full flex md:hidden">
          <div className="w-[55px] border-[1px]"></div>
          <div className="w-full max-w-[375px] flex flex-col gap-[20px]">
            {/** First Year Start */}
            <div className="flex flex-col w-full pl-[55px] relative">
              <hr className="border-[1px] border-[#006491] w-[30px] absolute left-[-6px] top-[10px]" />
              <p className="font-prompt text-[18px] font-semibold">2537</p>
              <p className="font-prompt text-[12px] text-[#7e8083]">
                Domino's Pizza เปิดสาขาแรกที่ สาขาสุขุมวิท 22 โรงแรม Holiday Inn
                โดยการนำเข้ามาของ มอนเทอเรย์ พิซซ่า
                ภายใต้การบริหารของเครือมอนเทอเรย์กรุ๊ป
              </p>
            </div>
            {/** First Year End */}

            {/** Second Year Start */}
            <div className="flex flex-col w-full pl-[55px] relative">
              <hr className="border-[1px] border-[#006491] w-[30px] absolute left-[-6px] top-[10px]" />
              <p className="font-prompt text-[18px] font-semibold">2555</p>
              <p className="font-prompt text-[12px] text-[#7e8083]">
                กลับสู่ตลาดไทยอีกครั้ง ภายใต้การบริหารของ ภายใต้ชื่อ บริษัท
                โดมิโน่ส์ (ประเทศไทย) จำกัด บริษัทในเครือ บริษัท ฟู้ดแคปปิตอล
                จำกัด (มหาชน)
              </p>
            </div>
            {/** Second Year End */}

            {/** Third Year Start */}
            <div className="flex flex-col pl-[55px] relative">
              <hr className="border-[1px] border-[#006491] w-[30px] absolute left-[-6px] top-[10px]" />
              <p className="font-prompt text-[18px] font-semibold">2563</p>
              <p className="font-prompt text-[12px] text-[#7e8083]">
                บริษัท วาวแฟกเตอร์ จำกัด (มหาชน) ได้เข้าซื้อกิจการ โดยให้ บริษัท
                โดมิโน่ เอเชีย แปซิฟิค จำกัด ได้รับโอนกิจการ
              </p>
            </div>
            {/** Third Year End */}

            {/** Fourth Year Start */}
            <div className="flex flex-col pl-[55px] relative">
              <hr className="border-[1px] border-[#006491] w-[30px] absolute left-[-6px] top-[10px]" />
              <p className="font-prompt text-[18px] font-semibold">2565</p>
              <p className="font-prompt text-[12px] text-[#7e8083]">
                เปลี่ยนเจ้าของอีกครั้ง โดยได้ บริษัท เอธธิคอล กูร์เมต์ จำกัด
                ร่วมกับการลงทุนของ บริษัท อควา คอร์เปอเรชั่น จำกัด (มหาชน)
                มาเป็นเจ้าของกิจการ Domino's Pizza ในประเทศไทย
              </p>
            </div>
            {/** Fourth Year End */}
          </div>
        </div>
        {/** Mobile Story Store End */}

        {/** Laptop Story Store Start */}
        <div className="w-full h-full hidden md:flex md:flex-col gap-[20px] relative">
          <div className="w-[55px] h-full absolute left-[348px] min-[961px]:left-[440px] border-[1px]"></div>
          {/** First Year Start */}
          <div className="flex justify-end relative">
            <div className="flex flex-col w-[280px] min-[961px]:w-[380px]">
              <hr className="border-[1px] border-[#006491] w-[45px] absolute left-[404px] min-[961px]:left-[488px] top-[15px]" />
              <p className="font-prompt text-[26px] font-semibold">2537</p>
              <p className="font-prompt text-[16px] text-[#7e8083]">
                Domino's Pizza เปิดสาขาแรกที่ สาขาสุขุมวิท 22 โรงแรม Holiday Inn
                โดยการนำเข้ามาของ มอนเทอเรย์ พิซซ่า
                ภายใต้การบริหารของเครือมอนเทอเรย์กรุ๊ป
              </p>
            </div>
          </div>
          {/** First Year End */}

          {/** Second Year Start */}
          <div className="flex justify-start relative">
            <div className="flex flex-col w-[280px] min-[961px]:w-[380px]">
              <hr className="border-[1px] border-[#006491] w-[45px] absolute right-[404px] min-[961px]:right-[488px] top-[15px]" />
              <p className="font-prompt text-[26px] font-semibold text-end">
                2555
              </p>
              <p className="font-prompt text-[16px] text-[#7e8083] text-end">
                กลับสู่ตลาดไทยอีกครั้ง ภายใต้การบริหารของ ภายใต้ชื่อ บริษัท
                โดมิโน่ส์ (ประเทศไทย) จำกัด บริษัทในเครือ <br />
                บริษัท ฟู้ดแคปปิตอล จำกัด (มหาชน)
              </p>
            </div>
          </div>
          {/** Second Year End */}

          {/** Third Year Start */}
          <div className="flex justify-end relative">
            <hr className="border-[1px] border-[#006491] w-[45px] absolute left-[404px] min-[961px]:left-[488px] top-[15px]" />
            <div className="flex flex-col w-[280px] min-[961px]:w-[380px]">
              <p className="font-prompt text-[26px] font-semibold">2563</p>
              <p className="font-prompt text-[16px] text-[#7e8083]">
                บริษัท วาวแฟกเตอร์ จำกัด (มหาชน) ได้เข้าซื้อกิจการ โดยให้ บริษัท
                โดมิโน่ เอเชีย แปซิฟิค จำกัด ได้รับโอนกิจการ
              </p>
            </div>
          </div>
          {/** Third Year End */}

          {/** Fourth Year Start */}
          <div className="flex justify-start relative">
            <div className="flex flex-col w-[280px] min-[961px]:w-[380px]">
              <hr className="border-[1px] border-[#006491] w-[45px] absolute right-[404px] min-[961px]:right-[488px] top-[15px]" />
              <p className="font-prompt text-[26px] font-semibold text-end">
                2565
              </p>
              <p className="font-prompt text-[16px] text-[#7e8083] text-end">
                เปลี่ยนเจ้าของอีกครั้ง โดยได้ บริษัท เอธธิคอล กูร์เมต์ จำกัด
                ร่วมกับการลงทุนของ บริษัท อควา คอร์เปอเรชั่น จำกัด (มหาชน)
                มาเป็นเจ้าของกิจการ Domino's Pizza <br />
                ในประเทศไทย
              </p>
            </div>
          </div>
          {/** Fourth Year End */}
        </div>
        {/** Laptop Story Store End */}
      </div>
      {/** About Us Fourth Section End */}
    </div>
  );
}

export default AboutUsMain;
