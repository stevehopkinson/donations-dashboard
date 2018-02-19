import React from "react";
import { mount } from "enzyme";
import DonationCard from "./DonationCard";

describe("DonationCard", () => {
  let props;
  let mountedDonationCard;
  const donationCard = () => {
    if (!mountedDonationCard) {
      mountedDonationCard = mount(
        <DonationCard {...props} />
      );
    }
    return mountedDonationCard;
  }

  beforeEach(() => {
    props = {
      donation: {
        donorDisplayName: 'Max Power',
        imageUrl: '/test/img/url',
        message: 'Foo bar'
      }
    };
    mountedDonationCard = undefined;
  });

  it('Renders no donation__amount if donation.amount isn\'t empty', () => {
    const donationAmount = donationCard().find('.donation__amount');
    expect(donationAmount.length).toBe(0);
  })

  it('Applies donation image as background image to donation__image', () => {
    const donationImage = donationCard().find('.donation__image').first();
    expect(donationImage.props().style.backgroundImage).toBe(`url('${props.donation.imageUrl}')`)
  })
});