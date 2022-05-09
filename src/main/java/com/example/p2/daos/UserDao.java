package com.example.p2.daos;

import com.example.p2.models.User;
import com.example.p2.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
//@CrossOrigin(origins = "*")
public class UserDao {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/create")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
    @GetMapping("/findAll")
    public List<User> findAllUser() {
        return userRepository.findAllUsers();
    }
    @GetMapping("/findById/{userId}")
    public User findUserById( @PathVariable("userId") Integer id) {
        return userRepository.findUserById(id);
    }
    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }
    @PutMapping("/update/{userId}")
    public User updateUser(@PathVariable("userId") Integer id,
                              @RequestBody User userUpdates) {
        User user = userRepository.findUserById(id);
        user.setUsername(userUpdates.getUsername());
        user.setPassword(userUpdates.getPassword());
        user.setEmail(userUpdates.getEmail());
        user.setFirstName(userUpdates.getFirstName());
        user.setLastName(userUpdates.getLastName());
        user.setDateOfBirth(userUpdates.getDateOfBirth());
        user.setAddress(userUpdates.getAddress());
        user.setCity(userUpdates.getCity());
        user.setState(userUpdates.getState());
        user.setZipcode(userUpdates.getZipcode());
        user.setPhone(userUpdates.getPhone());
        return userRepository.save(user);
    }
}
