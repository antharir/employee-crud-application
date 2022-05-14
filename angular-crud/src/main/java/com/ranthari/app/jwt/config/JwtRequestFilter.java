package com.ranthari.app.jwt.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.ranthari.app.jwt.service.JwtUserDetailsService;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

	@Autowired
	private JwtTokenUtil jwtUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		final String requestTokenHeader = request.getHeader("Authorization");
		String username = null;
		String jwtToken = null;
		
		if ( requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
			jwtToken = requestTokenHeader.substring(7);
			username = jwtUtil.getUsernameFromToken(jwtToken);
		} else {
			logger.warn("JWT token doesn't start with Bearer String");
		}
		if ( username != null && SecurityContextHolder.getContext().getAuthentication() == null ) {
			UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
			if (jwtUtil.validateToken(jwtToken, userDetails)) {
				UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
				token.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(token);
			}
		}
		filterChain.doFilter(request, response);
	}
}
