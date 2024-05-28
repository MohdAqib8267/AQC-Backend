import type { Schema, Attribute } from '@strapi/strapi';

export interface CompanyInfoCompanyInformationBanner extends Schema.Component {
  collectionName: 'components_company_info_company_information_banners';
  info: {
    displayName: 'Company_Information_Banner';
    icon: 'arrowRight';
  };
  attributes: {
    Image: Attribute.Media;
    Heading: Attribute.String;
    Quantity: Attribute.BigInteger;
    Post_Description: Attribute.String;
  };
}

export interface MethodsTechnologyMethods extends Schema.Component {
  collectionName: 'components_methods_technology_methods';
  info: {
    displayName: 'Technology-Methods';
    icon: 'database';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.String;
    Information: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface ProductsMicronutrientPremixesProducts
  extends Schema.Component {
  collectionName: 'components_products_micronutrient_premixes_products';
  info: {
    displayName: 'Micronutrient-Premixes-Products';
    icon: 'arrowRight';
  };
  attributes: {
    Image: Attribute.Media;
    Heading: Attribute.String;
    Description: Attribute.Text;
    Icon: Attribute.Media;
  };
}

export interface SlidesHomeSlider extends Schema.Component {
  collectionName: 'components_slides_home_sliders';
  info: {
    displayName: 'Slider';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Heading: Attribute.String;
    Description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'company-info.company-information-banner': CompanyInfoCompanyInformationBanner;
      'methods.technology-methods': MethodsTechnologyMethods;
      'products.micronutrient-premixes-products': ProductsMicronutrientPremixesProducts;
      'slides.home-slider': SlidesHomeSlider;
    }
  }
}
