class MediaQueries{constructor(){this.medium_screen=768,this.large_screen=1024,this.current_window=null,this.getScreenSize(),this.screenSizeListener()}getScreenSize(){var e=this.current_window;window.matchMedia(`only screen and (min-width: ${this.large_screen}px)`).matches?"large"!==this.current_window&&(this.current_window="large"):window.matchMedia(`only screen and (min-width: ${this.medium_screen}px)`).matches?"medium"!==this.current_window&&(this.current_window="medium"):"small"!==this.current_window&&(this.current_window="small"),this.current_window!==e&&window.trigger("theme:mqs:updated")}screenSizeListener(){window.on("resize",()=>this.getScreenSize())}}theme.mqs=new MediaQueries;