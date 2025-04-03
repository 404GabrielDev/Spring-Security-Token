package com.springsecurity.springsecurity.repository;

import com.springsecurity.springsecurity.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
}
