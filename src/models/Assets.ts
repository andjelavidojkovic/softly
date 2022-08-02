import { Auction } from "./Auction";

export type Assets = {
    _id: string;
    title: string;
    type: string;
    companyName: string;
    companyPhoneNumber: string;
    additionalComments: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    postCode: string;
    country: string;
    auctionId: string;
    __v: number;
    currentBid: number;
    startBid: number;
    endDate: string;
    startDate: string;
    pictureUrl: string | undefined;
    auction: Auction;
    status: string;
    id: string;
}

export type getAssets = {
    items: Assets;
    currentPage: number;
    totalItems: number;
    totalPages: number;
}