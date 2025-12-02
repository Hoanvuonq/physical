"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export const ContactButtons = () => {
  return (
    <div id="button-contact-vr">
      <div id="zalo-vr" className="button-contact">
        <div className="phone-vr">
          <div className="phone-vr-circle-fill"></div>
          <div className="phone-vr-img-circle">
            <Link target="_blank" href="https://zalo.me/0869967733">
              <Image
                src="/images/socials/zalo.png"
                alt="Zalo Contact"
                width={25}
                height={25}
                className="object-contain invert brightness-0 saturate-100 invert-100"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div id="phone-vr" className="button-contact">
        <div className="phone-vr">
          <div className="phone-vr-circle-fill"></div>
          <div className="phone-vr-img-circle">
            <Link target="_blank" href="tel:0338493868">
              <Image
                src="/images/socials/phone.png"
                alt="Zalo Contact"
                width={25}
                height={25}
                className="object-contain invert brightness-0 saturate-100 invert-100"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
