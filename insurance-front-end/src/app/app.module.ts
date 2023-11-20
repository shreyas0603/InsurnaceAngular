import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { AgentComponentComponent } from './agent-component/agent-component.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { GetAdminComponent } from './get-admin/get-admin.component';
// import { AddAgentComponent } from './add-agent/add-agent.component';
import { CommonLoginComponent } from './common-login/common-login.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddInsuranceTypeComponent } from './add-insurance-type/add-insurance-type.component';
import { AddInsuranceSchemeComponent } from './add-insurance-scheme/add-insurance-scheme.component';
import { AddInsurancePlanComponent } from './add-insurance-plan/add-insurance-plan.component';
import { TaxSettingComponent } from './tax-setting/tax-setting.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { GetInsuranceTypeComponent } from './get-insurance-type/get-insurance-type.component';
import { JwtInterceptor } from './jwt.interceptor';
import { GetInsuranceSchemeComponent } from './get-insurance-scheme/get-insurance-scheme.component';
import { GetAgentCustomerComponent } from './get-agent-customer/get-agent-customer.component';
import { AgentNavbarComponent } from './agent-navbar/agent-navbar.component';
import { GetCustomerInsuranceAccountComponent } from './get-customer-insurance-account/get-customer-insurance-account.component';
import { GetPolicyPaymentComponent } from './get-policy-payment/get-policy-payment.component';
import { GetPolicyClaimComponent } from './get-policy-claim/get-policy-claim.component';
import { GetCommisionComponent } from './get-commision/get-commision.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    AgentComponentComponent,
    AdminHomePageComponent,
    ShowCustomerComponent,
    GetAdminComponent,
    // AddAgentComponent,
    CommonLoginComponent,
    AddAgentComponent,
    AdminNavbarComponent,
    AddInsuranceTypeComponent,
    AddInsuranceSchemeComponent,
    AddInsurancePlanComponent,
    TaxSettingComponent,
    AddLocationComponent,
    GetInsuranceTypeComponent,
    GetInsuranceSchemeComponent,
    GetAgentCustomerComponent,
    AgentNavbarComponent,
    GetCustomerInsuranceAccountComponent,
    GetPolicyPaymentComponent,
    GetPolicyClaimComponent,
    GetCommisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
