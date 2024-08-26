import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../pages/auth/services/auth.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.headers.get("requireToken")){
    const authSvc = inject(AuthService);
    const token = authSvc.tokenValue;
    if (token) {
      const authReq = req.clone({
        setHeaders:{
          auth: `${token}`
        }
      });
      return next(req);
    }
  }
  return next (req);
};
