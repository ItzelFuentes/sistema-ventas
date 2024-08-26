import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, finalize } from 'rxjs';

var countRequest = 0;
export function loadingInterceptor (req: HttpRequest<unknown>,next:HttpHandlerFn): Observable<HttpEvent<unknown>>{
  countRequest++;
  const spinner = inject(NgxSpinnerService);
  spinner.show();
  
  
  return next(req).pipe(finalize( () => {
    countRequest--;
    if(!countRequest){
      spinner.hide();
    }
  }));
}


/*
@Injectable({
  provideIn:"root"
})*/



/*
export class LoadingInterceptor implements HttpInterceptorFn {
  private countRequest =0;
  constructor(private spinner: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Loading::Interceptor")
    this.spinner.show();
    this.countRequest++; 
    return next.handle(req).pipe(finalize( () => {
      this.countRequest--;
      if(!this.countRequest){
        this.spinner.hide();
      }
    }));
      
  }
}*/
